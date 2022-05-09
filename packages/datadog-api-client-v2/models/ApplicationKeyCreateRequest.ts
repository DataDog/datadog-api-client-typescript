/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyCreateData } from "./ApplicationKeyCreateData";

import { AttributeTypeMap } from "../util";

/**
 * Request used to create an application key.
 */
export class ApplicationKeyCreateRequest {
  /**
   * Object used to create an application key.
   */
  "data": ApplicationKeyCreateData;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "ApplicationKeyCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKeyCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
