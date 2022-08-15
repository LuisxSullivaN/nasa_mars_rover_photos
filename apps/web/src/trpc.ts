import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from 'server';
import type {
  inferProcedureOutput,
  inferProcedureInput,
  inferSubscriptionOutput,
} from '@trpc/server';

export const trpc = createReactQueryHooks<AppRouter>();
export type TQuery = keyof AppRouter['_def']['queries'];
