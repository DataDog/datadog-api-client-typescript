/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RelationshipToOutcomeData } from "./RelationshipToOutcomeData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API relationship to a scorecard outcome.
 */
export class RelationshipToOutcome {
  /**
   * The JSON:API relationship to an outcome, which returns the related rule id.
   */
  "data"?: RelationshipToOutcomeData;

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
    data: {
      baseName: "data",
      type: "RelationshipToOutcomeData",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RelationshipToOutcome.attributeTypeMap;
  }

  public constructor() {}
}
