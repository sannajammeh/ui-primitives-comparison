import { Container } from "@/components/ui";
import { Select, SelectItem } from "@/components/ui/Select/Select.classed";
import React from "react";
import styles from "./page.module.css";
import { UserModal } from "@/components/UserModal";
import { Button } from "@/components/ui/Button";

const Home = async () => {
  return (
    <Container>
      <Select defaultValue="1">
        <SelectItem value="1">One</SelectItem>
        <SelectItem value="2">Two</SelectItem>
        <SelectItem value="3">Three</SelectItem>
        <SelectItem value="4">Four</SelectItem>
      </Select>

      <div>
        <UserModal asChild>
          <Button className={styles.dialogButton}>Select user</Button>
        </UserModal>
      </div>
    </Container>
  );
};

export default Home;
