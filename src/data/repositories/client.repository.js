const BaseRepository = require("./base.repository");
const { Client } = require("../models");

class ClientRepository extends BaseRepository {
    constructor() {
        super(Client);
    }
}

module.exports = new ClientRepository();