/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AppVersionAttributes } from "./AppVersionAttributes";
import { AppVersionType } from "./AppVersionType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A version of an app.
 */
export class AppVersion {
  /**
   * Attributes describing an app version.
   */
  "attributes"?: AppVersionAttributes;
  /**
   * The ID of the app version.
   */
  "id"?: string;
  /**
   * The app-version resource type.
   */
  "type"?: AppVersionType;

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
      type: "AppVersionAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "AppVersionType",
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
    return AppVersion.attributeTypeMap;
  }

  public constructor() {}
}
