# Лендинг «Оживите фотографию»

Проект на `React + TypeScript + Vite` с вёрсткой под макет Figma и интерактивным сценарием:
- загрузка фото с диска;
- перетаскивание фото в зону загрузки (drag-and-drop);
- выбор варианта анимации с визуальным выделением;
- модальное окно оплаты при клике на кнопку «Сгенерировать».

## Технологии

- `React 19`
- `TypeScript`
- `Vite`
- `styled-components`
- `ESLint`

## Быстрый старт

### 1) Установка зависимостей

```bash
npm install
```

### 2) Запуск в режиме разработки

```bash
npm run dev
```

### 3) Сборка проекта

```bash
npm run build
```

### 4) Предпросмотр production-сборки

```bash
npm run preview
```

## Структура проекта

- `src/App.tsx` — корневая композиция страницы.
- `src/components/MainCard.tsx` — основной интерактивный блок.
- `src/components/UploadSection.tsx` — зона загрузки/drag-and-drop.
- `src/components/TemplateList.tsx` — список вариантов анимации.
- `src/components/LetterCard.tsx` — декоративный блок письма.
- `public/images/` — изображения и gif-ассеты для интерфейса.

## Примечания

- Пути вида `src="/images/..."` читаются из папки `public/images`.
- Для корректного отображения анимаций используйте реальные `.gif` файлы в `public/images`.
