import React from "react";
import { Card, Image, Text, Group, createStyles, rem } from "@mantine/core";
import { IconGitPullRequest, IconBrandGithub } from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },
}));
type Props = {
  repoName: string;
  repoDescription: string;
  repoLink: string;
  repoLive: string;
  howManyPr: string;
  logo: string;
  prLink: string;
};

function OpenSourceProjectCard({
  repoName,
  repoDescription,
  repoLink,
  repoLive,
  howManyPr,
  logo,
  prLink,
}: Props) {
  const { classes } = useStyles();
  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <div style={{ display: "flex", gap: "15px" }}>
        <Image src={logo} width={50} height={50} fit="contain" radius="xl" />
        <div>
          <h3>
            <a href={repoLive}>{repoName}</a>
          </h3>
          <Text fz="sm" color="grey" lh={1.7} mt={2}>
            {repoDescription}
          </Text>
        </div>
      </div>
      <Group ml={5} mt={10}>
        <a href={repoLink} style={{ height: "25px" }}>
          <IconBrandGithub color="grey" />
        </a>
        <a href={prLink}>
          <div style={{ display: "flex", gap: "3px", alignItems: "center" }}>
            <IconGitPullRequest color="grey" />
            <Text fz="sm" color="grey">
              {howManyPr}
            </Text>
          </div>
        </a>
      </Group>
    </Card>
  );
}

export default OpenSourceProjectCard;
