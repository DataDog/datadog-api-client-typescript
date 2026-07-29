/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImpactPatchAttributes } from "./IncidentImpactPatchAttributes";
import { IncidentImpactType } from "./IncidentImpactType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Incident impact data for a patch request.
 */
export class IncidentImpactPatchData {
  /**
   * The incident impact's attributes for a patch request. All fields are optional.
   */
  "attributes"?: IncidentImpactPatchAttributes;
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
      type: "IncidentImpactPatchAttributes",
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
    return IncidentImpactPatchData.attributeTypeMap;
  }

  public constructor() {}
}
