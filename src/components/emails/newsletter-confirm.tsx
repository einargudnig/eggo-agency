import { Html, Text } from "@react-email/components";

export function NewsletterConfirm({ firstName }: { firstName: string }) {
  return (
    <Html lang="en">
      <Text>{firstName}</Text>
      <Text>Thank you for subscribing to our newsletter!</Text>
    </Html>
  );
}
