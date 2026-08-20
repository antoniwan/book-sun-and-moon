# Graph Report - book-sun-and-moon  (2026-08-20)

## Corpus Check
- 26 files · ~854,024 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 104 nodes · 142 edges · 15 communities (13 shown, 2 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5651bf11`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- [[_COMMUNITY_Community 0|Community 0]]
- [[_COMMUNITY_Community 1|Community 1]]
- [[_COMMUNITY_Community 2|Community 2]]
- [[_COMMUNITY_Community 3|Community 3]]
- [[_COMMUNITY_Community 4|Community 4]]
- [[_COMMUNITY_Community 5|Community 5]]
- [[_COMMUNITY_Community 6|Community 6]]
- [[_COMMUNITY_Community 7|Community 7]]
- [[_COMMUNITY_Community 8|Community 8]]

## God Nodes (most connected - your core abstractions)
1. `Book()` - 7 edges
2. `canUseStorage()` - 6 edges
3. `scripts` - 5 edges
4. `useLanguage()` - 5 edges
5. `BOOK` - 4 edges
6. `splitForSpeech()` - 4 edges
7. `readResumePage()` - 4 edges
8. `browserslist` - 3 edges
9. `PAGES` - 3 edges
10. `toSpeechText()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Book()` --calls--> `readResumePage()`  [EXTRACTED]
  src/components/App.js → src/book/storage.js
- `Header()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/Header.js → src/components/LanguageContext.js
- `Book()` --calls--> `useLanguage()`  [EXTRACTED]
  src/components/App.js → src/components/LanguageContext.js
- `Book()` --calls--> `useBookNavigation()`  [EXTRACTED]
  src/components/App.js → src/hooks/useBookNavigation.js
- `Book()` --calls--> `useReadAloud()`  [EXTRACTED]
  src/components/App.js → src/hooks/useReadAloud.js

## Communities (15 total, 2 thin omitted)

### Community 0 - "Community 0"
Cohesion: 0.10
Nodes (20): browserslist, development, production, devDependencies, autoprefixer, postcss, tailwindcss, eslintConfig (+12 more)

### Community 1 - "Community 1"
Cohesion: 0.24
Nodes (7): Book(), Header(), useLanguage(), useBookNavigation(), useKeyboardNav(), useSwipeNav(), useReadAloud()

### Community 2 - "Community 2"
Cohesion: 0.25
Nodes (11): PAGES, canUseStorage(), pageFromHash(), readResumePage(), readSavedLanguage(), readSavedPage(), saveLanguage(), savePage() (+3 more)

### Community 4 - "Community 4"
Cohesion: 0.22
Nodes (9): dependencies, react, react-dom, react-feather, react-scripts, @testing-library/jest-dom, @testing-library/react, @testing-library/user-event (+1 more)

### Community 5 - "Community 5"
Cohesion: 0.25
Nodes (7): background_color, display, icons, name, short_name, start_url, theme_color

### Community 6 - "Community 6"
Cohesion: 0.33
Nodes (5): Build, code:bash (npm install), code:bash (npm run build), Mia, the Sun, and the Moon, Read it

### Community 7 - "Community 7"
Cohesion: 0.36
Nodes (6): loadVoices(), pickVoice(), splitForSpeech(), parts, voice, toSpeechText()

## Knowledge Gaps
- **35 isolated node(s):** `name`, `version`, `private`, `@testing-library/jest-dom`, `@testing-library/react` (+30 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Community 4` to `Community 0`?**
  _High betweenness centrality (0.037) - this node is a cross-community bridge._
- **What connects `name`, `version`, `private` to the rest of the system?**
  _35 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Community 0` be split into smaller, more focused modules?**
  _Cohesion score 0.09523809523809523 - nodes in this community are weakly interconnected._