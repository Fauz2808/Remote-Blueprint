# Repo-based publishing

`drafts/` menjadi staging area untuk artikel hasil editor atau cron. File di folder ini tidak diimpor aplikasi dan tidak dapat tampil di production.

`published/` hanya berisi konten yang sudah melewati factual review dan approval. Setiap artikel wajib punya unique slug, phase, outcome, sections, sources, dan `reviewedAt`.

Flow:

```text
riset → drafts → factual review → approval → published → tests → deploy
```

Cron tidak boleh memindahkan draft ke `published/` atau deploy tanpa approval.