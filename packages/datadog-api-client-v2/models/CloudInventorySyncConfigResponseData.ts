/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudInventorySyncConfigAttributes } from "./CloudInventorySyncConfigAttributes";
import { CloudInventorySyncConfigResourceType } from "./CloudInventorySyncConfigResourceType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API data object for a sync configuration.
 */
export class CloudInventorySyncConfigResponseData {
  /**
   * Attributes for a cloud inventory sync configuration. Values beyond `id` may be omitted immediately after upsert.
   */
  "attributes": CloudInventorySyncConfigAttributes;
  /**
   * Unique identifier for the recurring sync configuration.
   */
  "id": string;
  /**
   * JSON:API type for sync configuration resources.
   */
  "type": CloudInventorySyncConfigResourceType;

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
      type: "CloudInventorySyncConfigAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CloudInventorySyncConfigResourceType",
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
    return CloudInventorySyncConfigResponseData.attributeTypeMap;
  }

  public constructor() {}
}
