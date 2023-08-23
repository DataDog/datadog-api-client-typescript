/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBasicAuth } from "./SyntheticsBasicAuth";
import { SyntheticsTestCallType } from "./SyntheticsTestCallType";
import { SyntheticsTestRequestBodyType } from "./SyntheticsTestRequestBodyType";
import { SyntheticsTestRequestCertificate } from "./SyntheticsTestRequestCertificate";
import { SyntheticsTestRequestProxy } from "./SyntheticsTestRequestProxy";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing the Synthetic test request.
 */
export class SyntheticsTestRequest {
  /**
   * Allows loading insecure content for an HTTP request in a multistep test step.
   */
  "allowInsecure"?: boolean;
  /**
   * Object to handle basic authentication when performing the test.
   */
  "basicAuth"?: SyntheticsBasicAuth;
  /**
   * Body to include in the test.
   */
  "body"?: string;
  /**
   * Type of the request body.
   */
  "bodyType"?: SyntheticsTestRequestBodyType;
  /**
   * The type of gRPC call to perform.
   */
  "callType"?: SyntheticsTestCallType;
  /**
   * Client certificate to use when performing the test request.
   */
  "certificate"?: SyntheticsTestRequestCertificate;
  /**
   * By default, the client certificate is applied on the domain of the starting URL for browser tests. If you want your client certificate to be applied on other domains instead, add them in `certificateDomains`.
   */
  "certificateDomains"?: Array<string>;
  /**
   * A protobuf JSON descriptor that needs to be gzipped first then base64 encoded.
   */
  "compressedJsonDescriptor"?: string;
  /**
   * DNS server to use for DNS tests.
   */
  "dnsServer"?: string;
  /**
   * DNS server port to use for DNS tests.
   */
  "dnsServerPort"?: number;
  /**
   * Specifies whether or not the request follows redirects.
   */
  "followRedirects"?: boolean;
  /**
   * Headers to include when performing the test.
   */
  "headers"?: { [key: string]: string };
  /**
   * Host name to perform the test with.
   */
  "host"?: string;
  /**
   * Message to send for UDP or WebSocket tests.
   */
  "message"?: string;
  /**
   * Metadata to include when performing the gRPC test.
   */
  "metadata"?: { [key: string]: string };
  /**
   * Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.
   */
  "method"?: string;
  /**
   * Determines whether or not to save the response body.
   */
  "noSavingResponseBody"?: boolean;
  /**
   * Number of pings to use per test.
   */
  "numberOfPackets"?: number;
  /**
   * Persist cookies across redirects.
   */
  "persistCookies"?: boolean;
  /**
   * Port to use when performing the test.
   */
  "port"?: number;
  /**
   * The proxy to perform the test.
   */
  "proxy"?: SyntheticsTestRequestProxy;
  /**
   * Query to use for the test.
   */
  "query"?: any;
  /**
   * For SSL tests, it specifies on which server you want to initiate the TLS handshake,
   * allowing the server to present one of multiple possible certificates on
   * the same IP address and TCP port number.
   */
  "servername"?: string;
  /**
   * The gRPC service on which you want to perform the gRPC call.
   */
  "service"?: string;
  /**
   * Turns on a traceroute probe to discover all gateways along the path to the host destination.
   */
  "shouldTrackHops"?: boolean;
  /**
   * Timeout in seconds for the test.
   */
  "timeout"?: number;
  /**
   * URL to perform the test with.
   */
  "url"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    allowInsecure: {
      baseName: "allow_insecure",
      type: "boolean",
    },
    basicAuth: {
      type: "SyntheticsBasicAuth",
    },
    body: {
      type: "string",
    },
    bodyType: {
      type: "SyntheticsTestRequestBodyType",
    },
    callType: {
      type: "SyntheticsTestCallType",
    },
    certificate: {
      type: "SyntheticsTestRequestCertificate",
    },
    certificateDomains: {
      type: "Array<string>",
    },
    compressedJsonDescriptor: {
      type: "string",
    },
    dnsServer: {
      type: "string",
    },
    dnsServerPort: {
      type: "number",
      format: "int32",
    },
    followRedirects: {
      baseName: "follow_redirects",
      type: "boolean",
    },
    headers: {
      type: "{ [key: string]: string; }",
    },
    host: {
      type: "string",
    },
    message: {
      type: "string",
    },
    metadata: {
      type: "{ [key: string]: string; }",
    },
    method: {
      type: "string",
    },
    noSavingResponseBody: {
      type: "boolean",
    },
    numberOfPackets: {
      type: "number",
      format: "int32",
    },
    persistCookies: {
      type: "boolean",
    },
    port: {
      type: "number",
      format: "int64",
    },
    proxy: {
      type: "SyntheticsTestRequestProxy",
    },
    query: {
      type: "any",
    },
    servername: {
      type: "string",
    },
    service: {
      type: "string",
    },
    shouldTrackHops: {
      type: "boolean",
    },
    timeout: {
      type: "number",
      format: "double",
    },
    url: {
      type: "string",
    },
  };
}
