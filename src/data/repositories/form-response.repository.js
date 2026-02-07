const BaseRepository = require("./base.repository");
const { FormResponse } = require("../models");

class FormResponseRepository extends BaseRepository {
    constructor() {
        super(FormResponse);
    }
}

module.exports = new FormResponseRepository();