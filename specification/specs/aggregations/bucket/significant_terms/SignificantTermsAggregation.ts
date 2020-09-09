class SignificantTermsAggregation {
  background_filter: QueryContainer;
  chi_square: ChiSquareHeuristic;
  exclude: IncludeExclude;
  execution_hint: TermsAggregationExecutionHint;
  field: Field;
  gnd: GoogleNormalizedDistanceHeuristic;
  include: IncludeExclude;
  min_doc_count: long;
  mutual_information: MutualInformationHeuristic;
  percentage: PercentageScoreHeuristic;
  script_heuristic: ScriptedHeuristic;
  shard_min_doc_count: long;
  shard_size: integer;
  size: integer;
}
