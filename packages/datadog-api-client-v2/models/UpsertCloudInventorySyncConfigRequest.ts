/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UpsertCloudInventorySyncConfigRequestData } from "./UpsertCloudInventorySyncConfigRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request body for creating or updating a cloud inventory sync configuration.
 */
export class UpsertCloudInventorySyncConfigRequest {
  /**
   * JSON:API data envelope for an upsert sync configuration request.
   */
  "data": UpsertCloudInventorySyncConfigRequestData;

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
      type: "UpsertCloudInventorySyncConfigRequestData",
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
    return UpsertCloudInventorySyncConfigRequest.attributeTypeMap;
  }

  public constructor() {}
}
