"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useFormStatus } from "react-dom";

const FormDelete = () => {
  const { pending } = useFormStatus();
  return (
    <Button variant="destructive" size="sm" disabled={pending}>
      Delete
    </Button>
  );
};

export default FormDelete;
