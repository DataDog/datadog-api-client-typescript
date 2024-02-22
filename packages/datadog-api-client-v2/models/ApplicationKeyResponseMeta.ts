/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyResponseMetaPage } from "./ApplicationKeyResponseMetaPage";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Additional information related to the application key response.
 */
export class ApplicationKeyResponseMeta {
  /**
   * Max allowed number of application keys per user.
   */
  "maxAllowedPerUser"?: number;
  /**
   * Additional information related to the application key response.
   */
  "page"?: ApplicationKeyResponseMetaPage;

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
    maxAllowedPerUser: {
      baseName: "max_allowed_per_user",
      type: "number",
      format: "int64",
    },
    page: {
      baseName: "page",
      type: "ApplicationKeyResponseMetaPage",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKeyResponseMeta.attributeTypeMap;
  }

  public constructor() {}
}
