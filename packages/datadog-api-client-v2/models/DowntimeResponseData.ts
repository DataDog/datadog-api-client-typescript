/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DowntimeRelationships } from "./DowntimeRelationships";
import { DowntimeResourceType } from "./DowntimeResourceType";
import { DowntimeResponseAttributes } from "./DowntimeResponseAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Downtime data.
 */
export class DowntimeResponseData {
  /**
   * Downtime details.
   */
  "attributes"?: DowntimeResponseAttributes;
  /**
   * The downtime ID.
   */
  "id"?: string;
  /**
   * All relationships associated with downtime.
   */
  "relationships"?: DowntimeRelationships;
  /**
   * Downtime resource type.
   */
  "type"?: DowntimeResourceType;

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
      type: "DowntimeResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "DowntimeRelationships",
    },
    type: {
      baseName: "type",
      type: "DowntimeResourceType",
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
    return DowntimeResponseData.attributeTypeMap;
  }

  public constructor() {}
}
