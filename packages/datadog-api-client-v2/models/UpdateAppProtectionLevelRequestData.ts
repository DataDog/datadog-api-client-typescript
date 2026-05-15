/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppProtectionLevelType } from "./AppProtectionLevelType";
import { UpdateAppProtectionLevelRequestDataAttributes } from "./UpdateAppProtectionLevelRequestDataAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for updating an app's publication protection level.
 */
export class UpdateAppProtectionLevelRequestData {
  /**
   * Attributes for updating an app's publication protection level.
   */
  "attributes"?: UpdateAppProtectionLevelRequestDataAttributes;
  /**
   * The protection-level resource type.
   */
  "type"?: AppProtectionLevelType;

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
      type: "UpdateAppProtectionLevelRequestDataAttributes",
    },
    type: {
      baseName: "type",
      type: "AppProtectionLevelType",
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
    return UpdateAppProtectionLevelRequestData.attributeTypeMap;
  }

  public constructor() {}
}
