
const BaseRepository = require("./base.repository");
const { Proposal } = require("../models");

class ProposalRepository extends BaseRepository {
    constructor() {
        super(Proposal);
    }
}

module.exports = new ProposalRepository();