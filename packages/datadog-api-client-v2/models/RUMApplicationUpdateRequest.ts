/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RUMApplicationUpdate } from "./RUMApplicationUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * RUM application update request.
 */
export class RUMApplicationUpdateRequest {
  /**
   * RUM application update.
   */
  "data": RUMApplicationUpdate;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "RUMApplicationUpdate",
      required: true,
    },
  };
}
