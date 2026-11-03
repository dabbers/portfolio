---
title: MSSQL Server TLS 1.2
description: Adding TLS 1.2 support to SQL Server and its client drivers, including the 2008 and 2008 R2 netcode that couldn't fit the header.
date: 2022-06-25
---

My first job out of college was on the SQL Server Tiger team at Microsoft. We were responsible for fixing customer escalations that came through support for MSSQL Server. My biggest contribution was adding TLS 1.2 support across all products, meaning both the server and our client drivers.

The hardest part was adding support to SQL Server 2008 and 2008 R2. Their networking code didn't support headers of varying sizes, so the TLS 1.2 header couldn't fit inside the SQL Server protocol (TDS) the way we'd coded it. Without back-porting eight years of netcode changes, I found a way to work around the issue and let our packets compensate for the larger, variable-length TLS headers.

I also helped write the knowledge base and support articles for customers upgrading to TLS 1.2, which was a major compliance requirement for banks.

The release page is here: [KB3135244: TLS 1.2 support for Microsoft SQL Server](https://support.microsoft.com/en-us/topic/kb3135244-tls-1-2-support-for-microsoft-sql-server-e4472ef8-90a9-13c1-e4d8-44aad198cdbe).
