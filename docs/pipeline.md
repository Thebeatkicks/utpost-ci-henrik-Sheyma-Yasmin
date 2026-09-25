flowchart LR
  B[branch + commit] --> PR[pull request]

  PR --> Q[Kvalitet]
  Q --> L[lint]
  L --> FM[format]
  FM --> T[test]

  PR --> BU[Bygg]
  BU --> BI[build]
  BI --> AR[artifact]

  T --> S{gröna?}
  AR --> S

  S -->|ja|RV [review] 
  RV --> M[merge]
  S -->|nej| FX[fixa, pusha igen]
  FX --> PR
