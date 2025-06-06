import companyRepository from "./company.repository.js";

export default {
    async listCompanies() {
        return await companyRepository.list();
    },

    async getCompanyById(id) {
        const company = await companyRepository.getById(id);
        if (!company) {
            throw new Error(`Company with ID ${id} not found`);
        }
        return company;
    },

    async createCompany(companyData) {
        // Aqui pode ter validação antes de criar
        return await companyRepository.create(companyData);
    },

    async updateCompany(id, companyData) {
        const updatedCompany = await companyRepository.update(id, companyData);
        if (!updatedCompany) {
            throw new Error(`Company with ID ${id} not found`);
        }
        return updatedCompany;
    },

    async deleteCompany(id) {
        const deletedCompany = await companyRepository.remove(id);
        if (!deletedCompany) {
            throw new Error(`Company with ID ${id} not found`);
        }
        return deletedCompany;
    },
};
