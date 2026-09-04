/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DemInferredJourneyCandidateAttributes } from "./DemInferredJourneyCandidateAttributes";
import { DemJourneyType } from "./DemJourneyType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data object for an inferred journey candidate.
 */
export class DemInferredJourneyCandidateData {
  /**
   * Attributes of an inferred journey candidate.
   */
  "attributes": DemInferredJourneyCandidateAttributes;
  /**
   * The unique identifier of the inferred journey.
   */
  "id": string;
  /**
   * The type identifier for DEM journeys.
   */
  "type": DemJourneyType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "DemInferredJourneyCandidateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "DemJourneyType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DemInferredJourneyCandidateData.attributeTypeMap;
  }

  public constructor() {}
}
