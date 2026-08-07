/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { PatchMaintenanceUpdateRequestData } from "./PatchMaintenanceUpdateRequestData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request object for editing a maintenance update.
 */
export class PatchMaintenanceUpdateRequest {
  /**
   * The data object for editing a maintenance update.
   */
  "data"?: PatchMaintenanceUpdateRequestData;

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
      type: "PatchMaintenanceUpdateRequestData",
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
    return PatchMaintenanceUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
