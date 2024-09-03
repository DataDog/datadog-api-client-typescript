/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityResponseIncludedRelatedOncallEscalationItem } from "./EntityResponseIncludedRelatedOncallEscalationItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Included related oncall attributes.
 */
export class EntityResponseIncludedRelatedOncallAttributes {
  /**
   * Oncall escalations
   */
  "escalations"?: Array<EntityResponseIncludedRelatedOncallEscalationItem>;
  /**
   * Oncall provider.
   */
  "provider"?: string;

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
    escalations: {
      baseName: "escalations",
      type: "Array<EntityResponseIncludedRelatedOncallEscalationItem>",
    },
    provider: {
      baseName: "provider",
      type: "string",
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
    return EntityResponseIncludedRelatedOncallAttributes.attributeTypeMap;
  }

  public constructor() {}
}
