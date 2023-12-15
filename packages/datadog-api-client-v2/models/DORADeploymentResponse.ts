/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORADeploymentResponseData } from "./DORADeploymentResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response after receiving a DORA deployment event.
 */
export class DORADeploymentResponse {
  /**
   * The JSON:API data.
   */
  "data": DORADeploymentResponseData;

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
      type: "DORADeploymentResponseData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORADeploymentResponse.attributeTypeMap;
  }

  public constructor() {}
}
