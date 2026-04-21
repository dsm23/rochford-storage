interface ViteTypeOptions {
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  readonly VITE_SWETRIX_API_URL: string;
  readonly VITE_SWETRIX_PROJECT_ID: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
