/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMeta {
  readonly glob: <T = unknown>(
    pattern: string,
    options?: { eager?: boolean; import?: string; query?: string; as?: string }
  ) => Record<string, T>;
}
