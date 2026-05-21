/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentCaseLinkDataAttributes } from "./IncidentCaseLinkDataAttributes";
import { IncidentCaseLinkType } from "./IncidentCaseLinkType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Case link data.
 */
export class IncidentCaseLinkData {
  /**
   * Attributes of a case link.
   */
  "attributes": IncidentCaseLinkDataAttributes;
  /**
   * The case link identifier.
   */
  "id": string;
  /**
   * Case link resource type.
   */
  "type": IncidentCaseLinkType;

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
      type: "IncidentCaseLinkDataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IncidentCaseLinkType",
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
    return IncidentCaseLinkData.attributeTypeMap;
  }

  public constructor() {}
}
