const BaseRepository = require("./base.repository");
const { Contract } = require("../models");

class ContractRepository extends BaseRepository {
    constructor() {
        super(Contract);
    }
}

module.exports = new ContractRepository();