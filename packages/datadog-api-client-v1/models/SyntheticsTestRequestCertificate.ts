/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestRequestCertificateItem } from "./SyntheticsTestRequestCertificateItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Client certificate to use when performing the test request.
 */
export class SyntheticsTestRequestCertificate {
  /**
   * Define a request certificate.
   */
  "cert"?: SyntheticsTestRequestCertificateItem;
  /**
   * Define a request certificate.
   */
  "key"?: SyntheticsTestRequestCertificateItem;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    cert: {
      type: "SyntheticsTestRequestCertificateItem",
    },
    key: {
      type: "SyntheticsTestRequestCertificateItem",
    },
  };
}
