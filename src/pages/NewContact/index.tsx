import PageHeader from "../../components/PageHeader";
import ContactForm from "../../components/ContacForm";
import ContactsService from "../../services/ContactsService";

import NewContactType from "../../types/newContactsType";

export default function NewContact() {
  async function handleSubmit(formData: NewContactType) {
    try {
      const contact = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        category_id: formData.categoryId,
      };
      const response = await ContactsService.createContact(contact);

      console.log(response);
    } catch {
      alert("email em uso");
    }
  }

  return (
    <>
      <PageHeader title="Novo Contato" />
      <ContactForm buttonLabel="Cadastrar" onSubmit={handleSubmit} />
    </>
  );
}
