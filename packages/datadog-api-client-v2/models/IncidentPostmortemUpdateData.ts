/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentPostmortemType } from "./IncidentPostmortemType";
import { IncidentPostmortemUpdateAttributes } from "./IncidentPostmortemUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The postmortem resource for an update request.
 */
export class IncidentPostmortemUpdateData {
  /**
   * The postmortem's attributes for an update request.
   */
  "attributes": IncidentPostmortemUpdateAttributes;
  /**
   * The UUID of the postmortem.
   */
  "id": string;
  /**
   * Incident postmortem resource type.
   */
  "type": IncidentPostmortemType;

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
      type: "IncidentPostmortemUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentPostmortemType",
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
    return IncidentPostmortemUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
