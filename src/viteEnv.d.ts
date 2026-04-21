interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly SWETRIX_API_URL: string;
  readonly SWETRIX_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
