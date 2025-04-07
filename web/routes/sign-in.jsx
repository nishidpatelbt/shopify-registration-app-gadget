import { useActionForm } from "@gadgetinc/react";
import { api } from "../api";
import { Link } from "@remix-run/react";

export default function SignIn() {
  const {
    register,
    submit,
    formState: { errors, isSubmitting },
  } = useActionForm(api.user.signIn);

  return (
    <form className="custom-form" onSubmit={submit}>
      <h1 className="form-title">Sign in</h1>
      <div className="custom-form">
        <input className="custom-input" placeholder="Email" {...register("email")} />
        <input
          className="custom-input"
          placeholder="Password"
          type="password"
          {...register("password")}
        />
        {errors?.root?.message && (
          <p className="format-message error">{errors.root.message}</p>
        )}
        <button disabled={isSubmitting} type="submit">
          Sign in
        </button>
        <p>
          Forgot your password? <Link to="/forgot-password">Reset password</Link>
        </p>
      </div>
    </form>
  );
}