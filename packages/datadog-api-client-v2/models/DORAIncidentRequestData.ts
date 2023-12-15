/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DORAIncidentRequestAttributes } from "./DORAIncidentRequestAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The JSON:API data.
 */
export class DORAIncidentRequestData {
  /**
   * Attributes to create a DORA incident event.
   */
  "attributes": DORAIncidentRequestAttributes;

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
      type: "DORAIncidentRequestAttributes",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DORAIncidentRequestData.attributeTypeMap;
  }

  public constructor() {}
}
