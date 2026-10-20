/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemInferredJourneyCandidateData } from "./DemInferredJourneyCandidateData";
import { DemInferredJourneyIgnoredData } from "./DemInferredJourneyIgnoredData";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A single inferred journey item, either a candidate or an ignored journey.
 */

export type DemInferredJourneyItem =
  | DemInferredJourneyCandidateData
  | DemInferredJourneyIgnoredData
  | UnparsedObject;
