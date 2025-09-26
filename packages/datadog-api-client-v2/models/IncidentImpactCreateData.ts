/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImpactCreateAttributes } from "./IncidentImpactCreateAttributes";
import { IncidentImpactType } from "./IncidentImpactType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident impact data for a create request.
 */
export class IncidentImpactCreateData {
  /**
   * The incident impact's attributes for a create request.
   */
  "attributes": IncidentImpactCreateAttributes;
  /**
   * Incident impact resource type.
   */
  "type": IncidentImpactType;

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
      type: "IncidentImpactCreateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentImpactType",
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
    return IncidentImpactCreateData.attributeTypeMap;
  }

  public constructor() {}
}
