import {
  Card,
  Image,
  Text,
  Group,
  Badge,
  Button,
  ActionIcon,
  createStyles,
  rem,
} from "@mantine/core";

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

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface Props {
  image: string;
  title: string;
  description: string;
  projectSkills: string[];
  oText?: string;
  projectLiveLink: string;
  projectRepoLink: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  projectSkills,
  oText,
  projectLiveLink,
  projectRepoLink,
}: Props) {
  const { classes } = useStyles();

  const skills = projectSkills.map((skill, index) => (
    <Badge color="gray" key={index}>
      {skill}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={180} fit="contain" />
      </Card.Section>

      <Card.Section className={classes.section} mt="md">
        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
          <Text fz="lg" fw={600}>
            {title}
          </Text>
          <Text size={15} fw={650}>
            {oText}
          </Text>
        </div>
        <Text fz="xs">{description}</Text>
      </Card.Section>

      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Skills used:
        </Text>
        <Group spacing={7} mt={5}>
          {skills}
        </Group>
      </Card.Section>

      <Group mt="xs">
        <Button radius="md">
          <a href={projectLiveLink}>See Live</a>
        </Button>
        <Button radius="md">
          <a href={projectRepoLink}>See Repo</a>
        </Button>
      </Group>
    </Card>
  );
}
