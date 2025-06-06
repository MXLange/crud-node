import companyService from "./company.service.js";

export default {
    async listCompanies(req, res) {
        try {
            const companies = await companyService.listCompanies();
            res.json(companies);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async createCompany(req, res) {
        try {
            const newCompany = req.body;
            const result = await companyService.createCompany(newCompany);
            res.status(201).send(result);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async getCompanyById(req, res) {
        try {
            const companyId = req.params.id;
            const company = await companyService.getCompanyById(companyId);
            if (!company) return res.status(404).send("Company not found");
            res.json(company);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async updateCompany(req, res) {
        try {
            const companyId = req.params.id;
            const updatedData = req.body;
            const updated = await companyService.updateCompany(companyId, updatedData);
            if (!updated) return res.status(404).send("Company not found");
            res.send(`Company with ID ${companyId} updated successfully`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },

    async deleteCompany(req, res) {
        try {
            const companyId = req.params.id;
            const deleted = await companyService.deleteCompany(companyId);
            if (!deleted) return res.status(404).send("Company not found");
            res.send(`Company with ID ${companyId} deleted successfully`);
        } catch (error) {
            res.status(500).send(error.message);
        }
    },
};
