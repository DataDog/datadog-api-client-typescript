/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ApplicationKeyUpdateData } from "./ApplicationKeyUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Request used to update an application key.
 */
export class ApplicationKeyUpdateRequest {
  /**
   * Object used to update an application key.
   */
  "data": ApplicationKeyUpdateData;

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
      type: "ApplicationKeyUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ApplicationKeyUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
