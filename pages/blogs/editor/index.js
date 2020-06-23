import BaseLayout from "components/layouts/BaseLayout";
import BasePage from "components/BasePage";
import withAuth from "hoc/withAuth";
import { Editor } from "slate-simple-editor";
import { useCreateBlog } from "actions/blogs";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const BlogEditor = ({ user, userLoading }) => {
  const router = useRouter();
  const [createBlog, { data: createdBlog, error, loading }] = useCreateBlog();

  const saveBlog = async (data) => {
    const createdBlog = await createBlog(data);
    router.push('/blogs/editor/[id]', `/blogs/editor/${createdBlog._id}`)
    debugger
  };

  if (error) {
    toast.error(error);
  }

  return (
    <BaseLayout user={user} loading={userLoading}>
      <BasePage>

        <Editor onSave={saveBlog} loading={loading} />
        
      </BasePage>
    </BaseLayout>
  );
};

export default withAuth(BlogEditor)("admin");
