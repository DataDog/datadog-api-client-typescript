/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CloudInventorySyncConfigResponseData } from "./CloudInventorySyncConfigResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing the upserted sync configuration. Additional read-only fields appear on list and get.
 */
export class CloudInventorySyncConfigResponse {
  /**
   * JSON:API data object for a sync configuration.
   */
  "data": CloudInventorySyncConfigResponseData;

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
      type: "CloudInventorySyncConfigResponseData",
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
    return CloudInventorySyncConfigResponse.attributeTypeMap;
  }

  public constructor() {}
}
