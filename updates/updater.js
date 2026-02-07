
const { autoUpdater } = require('electron-updater');

// Variável para rastrear a etapa atual da atualização
let currentStep = 'initial';

// Função para enviar status para a interface do usuário (Renderer Process)
function sendToUI(data) {
  // Esta função precisará ser implementada para se comunicar com a sua janela do Electron.
  // Por exemplo: mainWindow.webContents.send('update-status', data);
  console.log('Enviando para UI:', data);
}

// 1. Verificando atualizações
autoUpdater.on('checking-for-update', () => {
  currentStep = 'checking';
  sendToUI({
    status: 'checking',
    message: 'Verificando versão no repositório…'
  });
});

// 2. Baixando atualização
autoUpdater.on('download-progress', (progressObj) => {
  currentStep = 'download';
  sendToUI({
    status: 'downloading',
    message: `Baixando arquivos (${Math.floor(progressObj.percent)}%)`
  });
});

// Atualização baixada com sucesso
autoUpdater.on('update-downloaded', (info) => {
  currentStep = 'downloaded';
  sendToUI({
    status: 'downloaded',
    message: 'Atualização pronta para instalar.',
    version: info.version
  });
  // Aqui, você normalmente perguntaria ao usuário se ele quer reiniciar e instalar.
  // Ex: autoUpdater.quitAndInstall();
});

// 3. TRATAMENTO DE ERRO
autoUpdater.on('error', (err) => {
  const errorDetails = {
    step: currentStep,
    error: err.message,
    version: autoUpdater.currentVersion, // ou a versão que estava sendo baixada
    timestamp: new Date().toISOString()
  };

  console.error('Falha na atualização:', errorDetails);

  // Envia o erro detalhado para a UI
  sendToUI({
    status: 'error',
    message: 'Falha na atualização',
    details: errorDetails
  });

  // O sistema NÃO quebra, NÃO avança de versão. O processo é interrompido aqui.
});

// Função para iniciar a verificação de atualização, que pode ser chamada pela UI.
function checkForUpdates() {
  // Configurações de segurança (exemplo)
  autoUpdater.channel = 'latest';
  autoUpdater.allowDowngrade = false;
  
  // Inicia a verificação
  autoUpdater.checkForUpdates();
}

module.exports = {
  checkForUpdates
};
