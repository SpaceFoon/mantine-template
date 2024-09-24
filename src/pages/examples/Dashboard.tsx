import StatsGrid from '@/components/stats';
import { UserTable } from '@/components/userTable';
import { Grid, Skeleton, Container } from '@mantine/core';

const child = <Skeleton height={140} radius="md" animate={false} />;

export default function Dashboard() {
  return (
    <Container my="md">
      <StatsGrid />
      <UserTable />
      {/* <Grid>
        <Grid.Col span={{ base: 12, xs: 4 }}></Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 8 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 4 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>{child}</Grid.Col>
        <Grid.Col span={{ base: 12, xs: 6 }}>{child}</Grid.Col>
      </Grid> */}
    </Container>
  );
}