import { UnparsedObject } from "@datadog/datadog-api-client";

import { DemInferredJourneyCandidateData } from "./DemInferredJourneyCandidateData";
import { DemInferredJourneyIgnoredData } from "./DemInferredJourneyIgnoredData";

/**
 * A single inferred journey item, either a candidate or an ignored journey.
 */
export type DemInferredJourneyItem =
  | DemInferredJourneyCandidateData
  | DemInferredJourneyIgnoredData
  | UnparsedObject;
