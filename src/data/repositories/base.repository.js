class BaseRepository {
    constructor(model) {
        this.model = model;
    }

    async get(id) {
        return this.model.findByPk(id);
    }

    async getAll() {
        return this.model.findAll();
    }

    async create(entity) {
        return this.model.create(entity);
    }

    async update(id, entity) {
        const result = await this.model.update(entity, { where: { id } });
        return result[0] > 0;
    }

    async delete(id) {
        const result = await this.model.destroy({ where: { id } });
        return result > 0;
    }
}

module.exports = BaseRepository;