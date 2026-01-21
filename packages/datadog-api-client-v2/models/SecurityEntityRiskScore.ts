/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityEntityRiskScoreAttributes } from "./SecurityEntityRiskScoreAttributes";
import { SecurityEntityRiskScoreType } from "./SecurityEntityRiskScoreType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * An entity risk score containing security risk assessment information
 */
export class SecurityEntityRiskScore {
  /**
   * Attributes of an entity risk score
   */
  "attributes": SecurityEntityRiskScoreAttributes;
  /**
   * Unique identifier for the entity
   */
  "id": string;
  /**
   * Resource type
   */
  "type": SecurityEntityRiskScoreType;

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
      type: "SecurityEntityRiskScoreAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SecurityEntityRiskScoreType",
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
    return SecurityEntityRiskScore.attributeTypeMap;
  }

  public constructor() {}
}
