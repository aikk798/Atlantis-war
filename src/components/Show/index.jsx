export default function Show({ test, children }) {
  return test ? children : null;
}
