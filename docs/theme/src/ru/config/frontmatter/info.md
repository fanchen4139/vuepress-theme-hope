---
title: Конфиг инфо Frontmatter
icon: config
order: 1
category:
  - Конфиг
tag:
  - Frontmatter
  - Инфо
---

Вы можете установить информацию для страницы со следующими параметрами frontmatter.

## title

- Тип: `string`
- Обязательный: Нет

Название текущей страницы. Первый h1 в Markdown по умолчанию.

## shortTitle

- Тип: `string`
- Обязательный: Нет

Краткое название текущей страницы. Будет использоваться как в навигационной панели, боковой панели и хлебных крошках.

## description

- Тип: `string`
- Обязательный: Нет

Описание текущей страницы.

## icon

- Тип: `string`
- Обязательный: Нет
- Ссылка:
  - [Руководство → Поддержка иконок](../../guide/interface/icon.md)

Ссылка FontClass/Image иконки текущей страницы (рекомендуется).

## author

- Тип: `Author | boolean`
- Обязательный: Нет

```ts
type AuthorInfo = { name: string; url?: string };

type Author = string | string[] | AuthorInfo | AuthorInfo[];
```

Показать автора текущей страницы. Если вы не заполните его, вы вернетесь к автору по умолчанию.

::: tip

При настройке автора по умолчанию в параметрах темы вы можете установить `false`, чтобы запретить отображение автора по умолчанию.

:::

## isOriginal

- Тип: `boolean`
- По умолчанию: `false`

Является ли текущая статья оригинальной.

## date

- Тип: `DateString`
- Обязательный: Нет
- Формат: `YYYY-MM-DD` или `YYYY/MM/DD hh:mm:ss`

Устанавливает время записи текущей страницы.

## category

- Тип: `string | string[]`
- Обязательный: Нет

Устанавливает категорию текущей страницы.

## tag

- Тип: `string | string []`
- Обязательный: Нет

Устанавливает метку текущей страницы.

## sticky

- Тип: `boolean | number`
- По умолчанию: `false`

Устанавливает, будет ли текущая статья закреплена в списке. При заполнении числом большие идут перед меньшими.

## star

- Тип: `boolean | number`
- По умолчанию: `false`

Устанавливает, будет ли текущая статья закреплена в списке статей в теме блога. При заполнении числом большие идут перед меньшими.

## article

- Тип: `boolean`
- По умолчанию: `true`

Добавлять ли статью в список статей.

## timeline

- Тип: `boolean`
- По умолчанию: `true`

Добавлять ли статью в список временной шкалы.

## image

- Тип: `string`
- Обязательный: Нет

Изображение текущей страницы требует абсолютного пути.
