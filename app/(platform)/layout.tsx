import { Toaster } from "sonner";
import { ClerkProvider } from "@clerk/nextjs";

import ModalProvider from "@/components/modals/providers/modal-provider";
import { QueryProvider } from "@/components/modals/providers/query-provider";

const PlatformLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ClerkProvider>
      <QueryProvider>
        <Toaster />
        <ModalProvider />
        {children}
      </QueryProvider>
    </ClerkProvider>
  );
};

export default PlatformLayout;
